import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'


export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin="" />


        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript>
            <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
              integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
              crossOrigin=""></script>
          </NextScript>
        </body>
      </Html>
    )
  }
}
