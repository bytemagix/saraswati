import Document, { Html, Head, Main, NextScript } from "next/document";

export default class SaraswatiDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://checkout.razorpay.com/v1/checkout.js" />
          <script src="https://js.instamojo.com/v1/checkout.js"></script>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
