// Drop-in replacement for next/link's <Link>, used because vinext 1.0.0-beta.5's client-side
// RSC prefetch setup for <Link> throws ("TypeError: f is not a function") on every mount, which
// leaves every Link's click handler dead — no navigation, no console error visible to a user,
// just a link that silently does nothing. This site is a handful of static pages; it doesn't
// need client-side prefetch/routing, so a plain <a> sidesteps the broken code path entirely.
import type {AnchorHTMLAttributes} from "react"

export default function Link({href,children,...rest}:AnchorHTMLAttributes<HTMLAnchorElement>&{href:string}){
 return <a href={href} {...rest}>{children}</a>
}
