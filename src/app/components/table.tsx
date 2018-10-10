import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

interface IProps {
  imageDetectionData?: any;
}

export default class Table extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    console.log("Here");
    console.log(this.props.imageDetectionData);
    return (
      <div className="container-fluid" style={{ paddingTop: "1em" }}>
        <BootstrapTable data={this.props.imageDetectionData} pagination>
          <TableHeaderColumn
            isKey={true}
            dataField="name"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Object
          </TableHeaderColumn>
          <TableHeaderColumn dataField="value" width="180">
            Probability
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
