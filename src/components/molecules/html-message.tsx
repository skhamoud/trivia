import { sanitize } from "dompurify";

type Props = { htmlText: string };

/** Encapsulates the need to sanitize html every time */
export default function HtmlMessage({ htmlText }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: sanitize(htmlText) }} />;
}
