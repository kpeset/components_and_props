/* eslint-disable react/prop-types */
export default function SummaryCategory({ settings }) {
  return (
    <li className={settings.color}>
      <div>
        <img alt="reaction" src={settings.img} />
        <h3>{settings.text}</h3>
      </div>
      <div>
        <div className="note">
          <p>{settings.rate}</p>
        </div>
        <div className="total">
          <p>/ 100</p>
        </div>
      </div>
    </li>
  );
}
