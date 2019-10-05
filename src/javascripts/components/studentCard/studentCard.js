import './studentCard.scss';

const createStudentCard = (student, house) => {
  const domString = `
  <li class="student-${house.name.toLowerCase()}">
    <div class="img-holder">
      <img src=${student.picture}>
    </div>
    <h3>${student.name}</h3>
  </li>
  `;
  return domString;
};

export default { createStudentCard };
