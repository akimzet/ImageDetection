import * as React from "react";
import DetectionApi from "../apis/detection.api";
import Header from "../components/header";
import Input from "../components/input";
import Table from "../components/table";

export interface IState {
  data: any;
  finished: boolean;
  url: string;
}

export default class Container extends React.Component<{}, IState> {
  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      data: null,
      finished: false,
      url: ""
    };
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleSubmitUrl = this.handleSubmitUrl.bind(this);
  }

  public render() {
    let imageDetectionData = null;
    if (this.state.finished) {
      if (this.state.data.outputs.length > 0) {
        console.log(this.state.data.outputs[0].data.concepts);
        imageDetectionData = this.state.data.outputs[0].data.concepts;
      }
    }

    return (
      <div>
        <Header />
        <Input
          handleChangeUrl={this.handleChangeUrl}
          handleSubmitUrl={this.handleSubmitUrl}
        />
        <div className="row">
          <div className="col-sm-6">
            <img
              src={this.state.url ? this.state.url : null}
              className="rounded mx-auto d-block"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-sm-6">
            <Table
              imageDetectionData={this.state.finished ? imageDetectionData : []}
            />
          </div>
        </div>
      </div>
    );
  }

  private handleChangeUrl(event: any) {
    this.setState({ url: event.target.value });
    event.preventDefault();
  }

  private handleSubmitUrl(event: any) {
    alert("A url was submitted: " + this.state.url);
    DetectionApi.GetResult(this.state.url).then(response => {
      if (response.isError) {
        console.log(response.error);
      } else {
        this.setState({ data: response, finished: true });
      }
    });
  }
}
