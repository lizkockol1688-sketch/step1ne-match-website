export type Block =
  | {type:"p";text:string}
  | {type:"list";items:string[]}
  | {type:"table";head:string[];rows:string[][]};

export type Article = {
  slug:string;
  title:string;
  description:string;
  category:string;
  published:string;
  updated:string;
  author:string;
  summary:string[];
  sections:{id:string;heading:string;blocks:Block[]}[];
  faq:[string,string][];
  sources:{label:string;url:string}[];
};

