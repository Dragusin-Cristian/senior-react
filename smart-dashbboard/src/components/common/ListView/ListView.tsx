import React from "react";

type TProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

const ListView = <T,>({ data, renderItem }: TProps<T>) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflowY: "scroll",
        gap: 16,
      }}
    >
      {data.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export default ListView;
