import axios from "axios";
import React, { useState, useEffect, useCallback, ComponentType } from "react";

type WithCrudResourceProps = {
  resource: string;
};

export type InjectedProps<T> = {
  items: T[];
  loading: boolean;
  error: string | null;
};

function withCrudResource<T, ExternalProps>(
  WrappedComponent: ComponentType<ExternalProps & InjectedProps<T>>
) {
  return (props: ExternalProps & WithCrudResourceProps) => {
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <WrappedComponent
        {...props}
        items={data}
        loading={loading}
        error={error}
      />
    );
  };
}

export default withCrudResource;
