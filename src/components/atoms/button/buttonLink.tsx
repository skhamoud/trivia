import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import styles from "./buttonLink.module.css";

// 🔥 Takes either `href` or a`to` prop not both, one of em has to be passed
// `href` renders normal anchor links, `to` renders an internal link from the router.
type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "to" | "className"> &
  ({ to?: never; href: string } | { to: string; href?: never });

export default function ButtonLink({
  to,
  href,
  children,
  ...rest
}: ButtonLinkProps) {
  if (href)
    return (
      <a href={href} className={styles.buttonLink} {...rest}>
        {children}
      </a>
    );
  return (
    <Link to={to} className={styles.buttonLink} {...rest}>
      {children}
    </Link>
  );
}
