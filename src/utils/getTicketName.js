const getTicketName = ({ teamName, taskId, taskTitle }) =>
	`${teamName.toUpperCase()}-${taskId}: ${taskTitle}`;

export default getTicketName;
