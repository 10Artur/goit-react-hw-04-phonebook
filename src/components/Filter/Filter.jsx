import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ onChangeContactFilter, value }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          value={value}
          onChange={onChangeContactFilter}
          placeholder="Search contact..."
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
