import React from 'react';
import PropTypes from 'prop-types';
import { CategoryFilters, CompletionStatusFilters } from '../../../store/constants';
import FilterRadioContainer from '../../../containers/FilterRadioContainer';
import styles from './Filter.css';

const Filter = (props) => {
	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const filterData = new FormData(evt.target);
		const completionStatus = JSON.parse(filterData.get('completion-status'));
		const category = filterData.get('category');

		if (completionStatus) {
			props.setCompletionStatusFilter(completionStatus);
		}

		if (category) {
			props.setCategoryFilter(category);
		}

		props.setCurrentPage(1);

		props.onFilterSubmit();
	};

	const handleResetClick = () => {
		props.setCompletionStatusFilter(CompletionStatusFilters.SHOW_ALL);
		props.setCategoryFilter(CategoryFilters.SHOW_ALL);
		props.setCurrentPage(1);
		props.onFilterSubmit();
	};

	return (
		<form className={styles.filter} onSubmit={handleFormSubmit}>
			<button className={styles.reset} type="button" onClick={handleResetClick}>
				Reset Filter
			</button>
			<fieldset className={styles.group}>
				<FilterRadioContainer
					id="completed-radio"
					name="completion-status"
					value={CompletionStatusFilters.SHOW_COMPLETE}
					description="Completed"
				/>
				<FilterRadioContainer
					id="incomplete-radio"
					name="completion-status"
					value={CompletionStatusFilters.SHOW_INCOMPLETE}
					description="Incomplete"
				/>
			</fieldset>
			<fieldset className={styles.group}>
				<FilterRadioContainer
					id="critical-radio"
					name="category"
					value={CategoryFilters.SHOW_CRITICAL}
					description="Crit"
				/>
				<FilterRadioContainer
					id="warn-radio"
					name="category"
					value={CategoryFilters.SHOW_WARN}
					description="Warn"
				/>
				<FilterRadioContainer
					id="info-radio"
					name="category"
					value={CategoryFilters.SHOW_INFO}
					description="Info"
				/>
				<FilterRadioContainer
					id="error-radio"
					name="category"
					value={CategoryFilters.SHOW_ERROR}
					description="Error"
				/>
				<FilterRadioContainer
					id="debug-radio"
					name="category"
					value={CategoryFilters.SHOW_DEBUG}
					description="Debug"
				/>
			</fieldset>
			<button className={styles.submit}>Apply</button>
		</form>
	);
};

Filter.propTypes = {
	setCompletionStatusFilter: PropTypes.func.isRequired,
	setCategoryFilter: PropTypes.func.isRequired,
	setCurrentPage: PropTypes.func,
	onFilterSubmit: PropTypes.func,
};

export default Filter;
