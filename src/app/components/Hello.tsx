import * as React from "react";
import DetectionApi from "../apis/detection.api";

export interface IState {
  data: any;
  finished: boolean;
  imageString: string;
}

export class Hello extends React.Component<{}, IState> {
  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      data: null,
      finished: false,
      imageString: "https://samples.clarifai.com/metro-north.jpg"
    };
  }

  public componentDidMount() {
    DetectionApi.GetResult(this.state.imageString).then(response => {
      if (response.isError) {
        console.log(response.error);
      } else {
        this.setState({ data: response, finished: true });
      }
    });
  }

  public render() {
    if (this.state.finished) {
      if (this.state.data.outputs.length > 0) {
        console.log(this.state.data.outputs[0].data.concepts);
      }
    }

    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}
