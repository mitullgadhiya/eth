import MainArticle from "@/components/MainArticle"
import InlineLink from "@/components/ui/Link"

const NotFoundPage = () => (
  <div className="mx-auto mb-0 mt-16 flex w-full flex-col items-center">
    <MainArticle className="my-8 w-full space-y-8 px-8 py-4">
      <h1>
        We couldnt find that page!
      </h1>
      <p>
        Start again{" "}
        <InlineLink href="/en/">
          return Home
        </InlineLink>
        .
      </p>
    </MainArticle>
  </div>
)

export default NotFoundPage
