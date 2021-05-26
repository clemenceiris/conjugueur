import './Autocomplete.css';

const AutoCompleteItem = () => {

  return (
      <li classaName={`list-groupe-item`}>
          <div className="row">
            <div className="col text-left">
              <p className="mb-0 font-weight-bold line-height-1">
                  Country Name{' '}
              </p>
              <p className="mb-0 badge badge-primary">Continent</p>
              <p className="mb-0 ml-2 badge-secondary">Capital</p>
            </div>
          </div>
      </li>
  );
}

export default AutoCompleteItem;
