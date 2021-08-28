import React from "react";
import { Table } from "reactstrap";

const tableHeading = ["No.", "Name", "Air Date", "Episode"];

const EpisodeTable = ({ allEpisode }) => {
  return (
    <Table>
      <thead>
        <tr>
          {tableHeading.map((heading, i) => (
            <th key={i}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allEpisode.map(({ id, name, air_date: airDate, episode }, i) => (
          <tr key={i}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{airDate}</td>
            <td>{episode}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EpisodeTable;
