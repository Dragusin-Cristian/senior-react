import React from "react";
import { ListContainer } from "./ListView.styles";

type TProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

const ListView = <T,>({ data, renderItem }: TProps<T>) => {
  return (
    <ListContainer>
      {data.map((item, index) => renderItem(item, index))}
    </ListContainer>
  );
};

export default ListView;
