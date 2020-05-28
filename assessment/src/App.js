import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { useEffect, useState } from "react";
import allDeals from "./allDeals";

const App = (props) => {
  let [tableData, setTableData] = useState([]);
  const data_people = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "dsc",
      },
      {
        label: "Open",
        field: "open",
        sort: "dsc",
      },
      {
        label: "Won",
        field: "won",
        sort: "dsc",
      },
      {
        label: "Lost",
        field: "lost",
        sort: "dsc",
      },
    ],
    rows: [
      {
        Name: "Jeff Kuei",
        Open: 0,
        Won: 1,
        Lost: "2",
      },
      {
        Name: "Jeff Kuei",
        Open: "0",
        Won: "1",
        Lost: "2",
      },
      {
        Name: "Jeff Kuei",
        Open: "0",
        Won: "1",
        Lost: "2",
      },
    ],
  };

  useEffect(() => {
    let obj = {};
    let data = allDeals;
    for (let i = 0; i < data.length; i++) {
      if (obj[data[i].creator.firstName + " " + data[i].creator.lastName]) {
        obj[data[i].creator.firstName + " " + data[i].creator.lastName][
          data[i].deal.status
        ] += 1;
      } else {
        obj[data[i].creator.firstName + " " + data[i].creator.lastName] = {
          open: 0,
          won: 0,
          lost: 0,
        };
        obj[data[i].creator.firstName + " " + data[i].creator.lastName][
          data[i].deal.status
        ] += 1;
      }
    }

    let size = Object.keys(obj).length;
    for (let i = 0; i < size; i++) {
      setTableData((tableData) => [
        ...tableData,
        {
          Name: Object.keys(obj)[i],
          Open: obj[Object.keys(obj)[i]].open,
          Won: obj[Object.keys(obj)[i]].won,
          Lost: obj[Object.keys(obj)[i]].lost,
        },
      ]);
    }
  }, []);

  return (
    <MDBTable align="center" style={{maxWidth: '80vw'}} responsiveSm striped>
      <MDBTableHead columns={data_people.columns} />
      <MDBTableBody rows={tableData.sort((a, b) => b.Open - a.Open)} />
    </MDBTable>
  );
};

export default App;
