import { LinkIcon } from '@primer/octicons-react'

type Props = {
  slug: string
  title: string
  descriptionHTML: string
}

export function RestOperationHeading({ slug, title, descriptionHTML }: Props) {
  return (
    <>
      <h2 id={slug}>
        <a href={`#${slug}`}>
          <LinkIcon size={16} className="m-1" />
        </a>
        {title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
    </>
  )
}
