import Purify from "dompurify";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & { htmlText: string };

/** Encapsulates the need to sanitize html every time */
export default function HtmlMessage({ htmlText, ...rest }: Props) {
  // eslint-disable-next-line risxss/catch-potential-xss-react
  return (
    <div
      dangerouslySetInnerHTML={{ __html: Purify.sanitize(htmlText) }}
      {...rest}
    />
  );
}
