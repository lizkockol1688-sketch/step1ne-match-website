"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { brandQuestionnaire } from "@/lib/brand-brief-questions";
import { siteConfig } from "@/lib/site-config";

type Answers = Record<string, string | string[]>;

function isFilled(v: string | string[] | undefined) {
  if (Array.isArray(v)) return v.length > 0;
  return !!v && v.trim().length > 0;
}

export function BrandQuestionnaire() {
  const total = brandQuestionnaire.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const [copyMsg, setCopyMsg] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const current = brandQuestionnaire[step];
  const requiredOk = current.fields.every((f) => !f.required || isFilled(answers[f.name]));

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

  const summary = brandQuestionnaire
    .flatMap((s) => s.fields)
    .map((f) => {
      const v = answers[f.name];
      const text = Array.isArray(v) ? v.join("、") : v;
      return text ? `${f.label}：${text}` : null;
    })
    .filter(Boolean)
    .join("\n");

  if (done) {
    return (
      <div className="qcard qcard-done">
        <div className="qcard-inner">
          <div className="qcheck">
            <Check size={26} />
          </div>
          <h2>整理好了</h2>
          <p className="qhint">目前送出入口尚未開放，這份問卷不會傳送或儲存你的資料。複製下面的摘要，直接加 LINE 貼給顧問最快。</p>
          <textarea readOnly value={summary} className="qsummary" />
          <div className="qactions">
            <button
              className="btn"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(summary);
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
          {current.fields.map((f) => (
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
          ))}
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
