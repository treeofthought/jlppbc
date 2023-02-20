import { useEffect, useState } from "react";

async function fetchTableData(target) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${target}`)
  const text = await response.text();
  const json = JSON.parse(text);
  return json
}

function JSONTableRows({ target, includeAvg }) {

  const [json, setJSON] = useState([]);
  const [headers, setHeaders] = useState([]);
  const knownHeaders = includeAvg ? ['Title', 'Author', 'Avg'] : ['Title', 'Author'];

  useEffect(() => {
    (async () => {
      const json = await fetchTableData(target)
      const rawHeaders = json[0] ? Object.keys(json[0]) : []
      const users = rawHeaders.filter(function(x) {
        return knownHeaders.indexOf(x) < 0;
      });
      setJSON(json);
      setHeaders(knownHeaders.concat(users));
    })()
  }, [])

  return(
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => 
              <th key={i}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {json.map((row, rowI) =>
          <tr key={rowI}>
            {headers.map((header, colI) => 
              <td key={colI}>{row[header] || '--'}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default JSONTableRows;
