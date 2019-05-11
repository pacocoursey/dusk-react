import React from 'react';
import * as Dusk from '../components';

export default () => (
  <div>
    {Object.keys(Dusk).map((name) => {
      const I = Dusk[name];
      return <I size={100} key={name} />;
    })}

    <style jsx>
      {`
        div {
          margin: 50px;
        }

        div svg {
          margin: 5px;
        }
      `}
    </style>
  </div>
);
