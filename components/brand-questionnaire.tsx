"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft, Check, Plus, X } from "lucide-react";
import { brandQuestionnaire } from "@/lib/brand-brief-questions";
import { siteConfig } from "@/lib/site-config";

type ProductEntry = { product: string; sellingPoint: string };
type AnswerValue = string | string[] | ProductEntry[];
type Answers = Record<string, AnswerValue>;

function isTextFilled(v: string | undefined) {
  return !!v && v.trim().length > 0;
}

const emptyProduct: ProductEntry = { product: "", sellingPoint: "" };

export function BrandQuestionnaire() {
  const total = brandQuestionnaire.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const [copyMsg, setCopyMsg] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const current = brandQuestionnaire[step];

  const getProducts = (): ProductEntry[] => (answers.products as ProductEntry[] | undefined) || [emptyProduct];
  const setProductField = (idx: number, key: keyof ProductEntry, value: string) => {
    const list = getProducts().map((p, i) => (i === idx ? { ...p, [key]: value } : p));
    setAnswers((a) => ({ ...a, products: list }));
  };
  const addProduct = () => setAnswers((a) => ({ ...a, products: [...getProducts(), { ...emptyProduct }] }));
  const removeProduct = (idx: number) => setAnswers((a) => ({ ...a, products: getProducts().filter((_, i) => i !== idx) }));

  const fieldOk = (f: (typeof current.fields)[number]) => {
    if (!f.required) return true;
    if (f.type === "productList") {
      const first = getProducts()[0];
      return isTextFilled(first?.product) && isTextFilled(first?.sellingPoint);
    }
    const v = answers[f.name];
    if (Array.isArray(v)) return v.length > 0;
    return isTextFilled(v as string | undefined);
  };
  const requiredOk = current.fields.every(fieldOk);

  useEffect(() => {
    cardRef.current?.focus();
  }, [step]);

  const setField = (name: string, value: string | string[]) => setAnswers((a) => ({ ...a, [name]: value }));

  const toggleChip = (name: string, option: string) => {
    const cur = (answers[name] as string[] | undefined) || [];
    setField(name, cur.includes(option) ? cur.filter((x) => x !== option) : [...cur, option]);
  };

  const next = () => {
    if (!requiredOk) return;
    if (step < total - 1) setStep((s) => s + 1);
    else setDone(true);
  };
  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && current.fields.every((f) => f.type !== "textarea")) {
      e.preventDefault();
      next();
    }
  };

  // Grouped by STEP section, skipping empty optional fields, so the pasted-to-LINE summary
  // reads like a structured brief instead of a flat label:value dump.
  const summarySections = brandQuestionnaire
    .map((s) => {
      const lines: string[] = [];
      for (const f of s.fields) {
        if (f.type === "productList") {
          getProducts().forEach((p, i) => {
            if (isTextFilled(p.product) || isTextFilled(p.sellingPoint)) {
              lines.push(`產品${i + 1}：${p.product || "—"}（核心賣點：${p.sellingPoint || "—"}）`);
            }
          });
          continue;
        }
        const v = answers[f.name];
        const text = Array.isArray(v) ? v.join("、") : v;
        if (text) lines.push(`${f.label}：${text}`);
      }
      return { title: s.title, lines };
    })
    .filter((s) => s.lines.length > 0);

  const summaryText = summarySections.map((s) => `【${s.title}】\n${s.lines.join("\n")}`).join("\n\n");

  if (done) {
    return (
      <div className="qcard qcard-done">
        <div className="qcard-inner">
          <div className="qcheck">
            <Check size={26} />
          </div>
          <h2>整理好了</h2>
          <p className="qhint">目前送出入口尚未開放，這份問卷不會傳送或儲存您的資料。複製下面的摘要，直接加 LINE 貼給顧問最快。</p>
          <div className="qsummary">
            {summarySections.map((s) => (
              <div className="qsummary-section" key={s.title}>
                <p className="qsummary-title">{s.title}</p>
                {s.lines.map((l) => (
                  <p key={l} className="qsummary-line">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
          {siteConfig.lineOaUrl && (
            <a
              className="btn qline-share"
              href={`https://line.me/R/msg/text/?${encodeURIComponent(summaryText)}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              用 LINE 傳送摘要給顧問 <ArrowRight size={17} />
            </a>
          )}
          <p className="qhint" style={{ marginTop: siteConfig.lineOaUrl ? 8 : 0 }}>
            {siteConfig.lineOaUrl ? "上面這顆按鈕會打開 LINE，摘要已預先帶好，選擇 STEP1NE 這個好友送出即可（僅支援手機版 LINE App）。" : ""}
            電腦版或尚未加好友，可以用下面的方式：
          </p>
          <div className="qactions">
            <button
              className="btn secondary"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(summaryText);
                  setCopyMsg("已複製，貼給顧問就可以了");
                } catch {
                  setCopyMsg("請選取上方文字手動複製");
                }
              }}
            >
              複製摘要
            </button>
            {siteConfig.lineOaUrl && (
              <a className="btn secondary" href={siteConfig.lineOaUrl} target="_blank" rel="noreferrer noopener">
                加 LINE 聯絡顧問 <ArrowRight size={17} />
              </a>
            )}
          </div>
          {copyMsg && (
            <p className="qhint" role="status">
              {copyMsg}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="qcard" onKeyDown={onKeyDown}>
      <div className="qprogress" aria-hidden="true">
        <span style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>
      <div className="qcard-inner" ref={cardRef} tabIndex={-1} key={current.id}>
        <p className="qkicker">
          {current.kicker} <span className="qcount">{step + 1} / {total}</span>
        </p>
        <h2>{current.title}</h2>
        {current.hint && <p className="qhint">{current.hint}</p>}
        <div className="qfields">
          {current.fields.map((f) => {
            if (f.type === "productList") {
              const products = getProducts();
              return (
                <div className="qfield" key={f.name}>
                  <div className="qproduct-list">
                    {products.map((p, idx) => (
                      <div className="qproduct" key={idx}>
                        <div className="qproduct-head">
                          <span>
                            {idx === 0 ? "產品 1" : `產品 ${idx + 1}（選填）`}
                          </span>
                          {idx > 0 && (
                            <button type="button" className="qproduct-remove" onClick={() => removeProduct(idx)} aria-label="移除這個產品">
                              <X size={16} />
                            </button>
                          )}
                        </div>
                        <label className="qfield">
                          <span>產品 / 服務名稱{idx === 0 && <em> *</em>}</span>
                          <input type="text" value={p.product} onChange={(e) => setProductField(idx, "product", e.target.value)} placeholder="例如：STEP1NE 保濕面膜" />
                        </label>
                        <label className="qfield">
                          <span>核心賣點{idx === 0 && <em> *</em>}</span>
                          <textarea value={p.sellingPoint} onChange={(e) => setProductField(idx, "sellingPoint", e.target.value)} placeholder="最希望讓消費者記住的一件事是什麼" />
                        </label>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="btn secondary qadd-product" onClick={addProduct}>
                    <Plus size={16} /> 新增產品
                  </button>
                </div>
              );
            }
            return (
              <label className="qfield" key={f.name}>
                <span>
                  {f.label}
                  {f.required && <em> *</em>}
                </span>
                {f.type === "textarea" && (
                  <textarea value={(answers[f.name] as string) || ""} onChange={(e) => setField(f.name, e.target.value)} placeholder={f.placeholder} />
                )}
                {(f.type === "text" || f.type === "email" || f.type === "tel") && (
                  <input
                    type={f.type}
                    value={(answers[f.name] as string) || ""}
                    onChange={(e) => setField(f.name, e.target.value)}
                    placeholder={f.placeholder}
                  />
                )}
                {f.type === "select" && (
                  <select value={(answers[f.name] as string) || ""} onChange={(e) => setField(f.name, e.target.value)}>
                    <option value="">請選擇</option>
                    {f.options?.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                )}
                {f.type === "single" && (
                  <div className="qoptions">
                    {f.options?.map((o) => (
                      <button
                        type="button"
                        key={o}
                        className={"qoption" + (answers[f.name] === o ? " active" : "")}
                        onClick={() => setField(f.name, o)}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                )}
                {f.type === "chips" && (
                  <div className="qoptions">
                    {f.options?.map((o) => (
                      <button
                        type="button"
                        key={o}
                        className={"qoption" + (((answers[f.name] as string[]) || []).includes(o) ? " active" : "")}
                        onClick={() => toggleChip(f.name, o)}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                )}
              </label>
            );
          })}
        </div>
        <div className="qactions">
          {step > 0 && (
            <button className="btn secondary" onClick={back}>
              <ArrowLeft size={17} /> 上一題
            </button>
          )}
          <button className="btn" disabled={!requiredOk} onClick={next}>
            {step === total - 1 ? "完成" : "下一題"} <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
