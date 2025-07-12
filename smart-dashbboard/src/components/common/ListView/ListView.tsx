import React from "react";
import { ListContainer } from "./ListView.styles";
import { TypeWithId } from "types/TypeWithId.type";

type TProps<T extends TypeWithId> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

const ListView = <T extends TypeWithId>({ data, renderItem }: TProps<T>) => {
  return (
    <ListContainer>
      {data.map((item, index) => (
        <React.Fragment key={item.id}>{renderItem(item, index)}</React.Fragment>
      ))}
    </ListContainer>
  );
};

export default ListView;
