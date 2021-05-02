import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const HeaderSection = ({ offer }) => {
  if (offer) {
    return (
      <div className="flex flex-row items-center shadow-md p-5 mb-5 bg-primary text-white rounded-md">
        <div className="w-1/4">
          <img
            className="shadow max-h-36 max-w-36 p-2 m-auto bg-white rounded-md"
            src={offer.company.logo_file_path}
          />
        </div>
        <div className="ml-5 flex-grow">
          <h1 className="my-1 text-2xl">{offer.title}</h1>
          <p className="my-1 text-lg">{offer.company.name}</p>
          <address className="text-sm font-thin">
            {offer.locations.map((location) => (
              <p key={`address-${location.id}`}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={'xs'} />{' '}
                <span className="ml-1">
                  {location.street}, {location.city}
                </span>
              </p>
            ))}
          </address>
          <p className="shadow my-2 text-xl text-black bg-white rounded-lg text-center">
            {offer.salary_from} - {offer.salary_to} PLN
          </p>
        </div>
      </div>
    );
  }
};

export default HeaderSection;
