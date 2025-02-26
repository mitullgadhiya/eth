import Head from "next/head"
import { useRouter } from "next/router"

import { getOgImage } from "@/lib/utils/metadata"
import { getFullUrl } from "@/lib/utils/url"

import { SITE_URL } from "@/lib/constants"

type NameMeta = {
  name: string
  content: string
}

type PropMeta = {
  property: string
  content: string
}

export type Meta = NameMeta | PropMeta

export type PageMetadataProps = {
  title: string
  description: string
  image?: string
  canonicalUrl?: string
  author?: string
}

const PageMetadata = ({
  description,
  title,
  image,
  canonicalUrl,
  author,
}: PageMetadataProps) => {
  const { locale, asPath } = useRouter()

  // Remove any query params (?) or hash links (#)
  const path = asPath.replace(/[?#].*/, "")
  const slug = path.split("/")

  // Set canonical URL w/ language path to avoid duplicate content
  const url = getFullUrl(path)
  const canonical = canonicalUrl || url

  // Set x-default URL for hreflang
  const xDefault = getFullUrl(path)

  /* Set fallback ogImage based on path */
  const ogImage = image || getOgImage(slug)

  const ogImageUrl = new URL(ogImage, SITE_URL).href
  const metadata: Meta[] = [
    { name: `image`, content: ogImageUrl },
    { name: `description`, content: description },
    { name: `docsearch:description`, content: description },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:creator`, content: author || title },
    { name: `twitter:site`, content: author || title },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: description },
    { name: `twitter:image`, content: ogImageUrl },
    { property: `og:title`, content: title },
    { property: `og:locale`, content: locale! },
    { property: `og:description`, content: description },
    { property: `og:type`, content: `website` },
    { property: `og:url`, content: url },
    { property: `og:image`, content: ogImageUrl },
    { property: `og:site_name`, content: title },
  ]

  return (
    <Head>
      <title>{title}</title>
      {metadata.map((data) => (
        <meta
          key={(data as NameMeta).name || (data as PropMeta).property}
          {...data}
        />
      ))}
      <link rel="canonical" key={canonical} href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={xDefault} />
    </Head>
  )
}

export default PageMetadata
