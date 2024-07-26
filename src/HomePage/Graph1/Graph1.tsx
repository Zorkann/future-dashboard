import { ProgressBar } from '@components/ProgressBar';
import { useGetGraph1Data } from '../../../src/api/getGraph1Data';

export function Graph1() {
  const { status, data } = useGetGraph1Data();
  // const { status, data } = useQuery({
  // 	queryKey: ["Graph1Data"],
  // 	queryFn: getGraph1Data,
  // });
  if (status === 'pending') return <h2>Loading...</h2>;

  if (status === 'error') return <h2>Error</h2>;

  return (
    <div className="flex flex-col h-full gap-1">
      {data.data.map(({ label, value }, index) => (
        <ProgressBar
          key={label}
          label={label}
          value={value}
          colorVariant={index}
        />
      ))}
    </div>
  );
}
