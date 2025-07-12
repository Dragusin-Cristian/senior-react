import axios from "axios";
import React, { useState, useEffect, useCallback, ComponentType } from "react";

type WithCrudResourceListProps = {
  resource: string;
};

type TypeWithId = { id: number };

export type CrudListInjectedProps<T extends TypeWithId> = {
  items: T[];
  loading: boolean;
  error: string | null;
  removeItem: (id: number) => {};
  editItem: (id: number, updatedFields: Partial<T>) => {};
  addItem: (newItem: Omit<T, "id">) => {};
};

function withCrudResourceList<T extends TypeWithId, ExternalProps>(
  WrappedComponent: ComponentType<ExternalProps & CrudListInjectedProps<T>>
) {
  return (props: ExternalProps & WithCrudResourceListProps) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getData = useCallback(async () => {
      setLoading(true);
      setError(null);
      try {
        const newData = (await axios.get(props.resource)).data;
        setData(newData);
        setLoading(false);
      } catch (error) {
        setError("Some error occured");
        setLoading(false);
      }
    }, [props.resource]);

    useEffect(() => {
      getData();
    }, [getData]);

    const removeItem = useCallback(
      async (id: number) => {
        setLoading(true);
        setError(null);
        try {
          await axios.delete(props.resource + `/${id}`);
          setData((currentData) =>
            currentData.filter((item) => item.id !== id)
          );
          setLoading(false);
        } catch (error) {
          setError("Some error occured");
          setLoading(false);
        }
      },
      [props.resource]
    );

    const editItem = useCallback(
      async (id: number, updatedFields: Partial<T>) => {
        setLoading(true);
        setError(null);
        try {
          await axios.put(props.resource + `/${id}`, updatedFields);
          setData((currentData) =>
            currentData.map((item) =>
              item.id === id ? { ...item, ...updatedFields } : item
            )
          );
          setLoading(false);
        } catch (error) {
          setError("Some error occured");
          setLoading(false);
        }
      },
      [props.resource]
    );

    const addItem = useCallback(
      async (newItem: Omit<T, "id">) => {
        setLoading(true);
        setError(null);
        try {
          const newCreatedItem = (await axios.post(props.resource, newItem))
            .data as T;
          setData((currentData) => currentData.concat(newCreatedItem));
          setLoading(false);
        } catch (error) {
          setError("Some error occured");
          setLoading(false);
        }
      },
      [props.resource]
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <WrappedComponent
        {...props}
        items={data}
        removeItem={removeItem}
        editItem={editItem}
        addItem={addItem}
        loading={loading}
        error={error}
      />
    );
  };
}

export default withCrudResourceList;
