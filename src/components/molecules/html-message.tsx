import Purify from "dompurify";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & { htmlText: string };

/** Encapsulates the need to sanitize html every time */
export default function HtmlMessage({ htmlText, ...rest }: Props) {
  return (
    <div
      // eslint-disable-next-line risxss/catch-potential-xss-react
      dangerouslySetInnerHTML={{ __html: Purify.sanitize(htmlText) }}
      {...rest}
    />
  );
}
