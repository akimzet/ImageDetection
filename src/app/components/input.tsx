import * as React from "react";

interface IProps {
  data?: any;
  handleChangeUrl?: (event: any) => void;
  handleSubmitUrl?: (event: any) => void;
}

interface IState {
  data?: any;
}

export default class Input extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null
    };
  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6" style={{ paddingTop: "1em" }}>
            <div className="jumbotron">
              <div className="row">
                <div className="col-sm-6 offset-sm-3">
                  <h2 style={{ textAlign: "center" }}>Image Url</h2>
                  <div className="input-group mb-3 center">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        URL
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Image Link"
                      aria-label="ImageUrl"
                      aria-describedby="basic-addon1"
                      style={{ textAlign: "center" }}
                      onChange={this.props.handleChangeUrl}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={this.props.handleSubmitUrl}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ paddingTop: "1em" }}>
            <div className="jumbotron">
              <div className="row">
                <div className="col-sm-6 offset-sm-3">
                  <h2 style={{ textAlign: "center" }}>Image from PC</h2>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        PC
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="File Path"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      style={{ textAlign: "center" }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        File
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
