export default function InboxDetailsPage(props: {
	params: {
		id: string;
	};
}) {
	return <div>inbox {props.params.id}</div>;
}
