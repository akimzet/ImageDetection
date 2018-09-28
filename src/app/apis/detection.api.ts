const Clarifai = require("clarifai");
const app = new Clarifai.App({
  apiKey: "05a4d438f4a14f75bfd363fd55a4d071"
});

export default class DetectionApi {
  public static async GetResult(imageLink: string) {
    return app.models.predict(Clarifai.GENERAL_MODEL, imageLink).then(
      (response: any) => {
        return response;
      },
      (error: any) => {
        return {
          error,
          isError: true
        };
      }
    );
  }
}
