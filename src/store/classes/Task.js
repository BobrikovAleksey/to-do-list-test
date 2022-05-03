const isString = (param) => (typeof param === 'string');

class Task {
  /**
   * Конструктор
   * @param id {number}
   * @param title {string}
   * @param description {string}
   * @param project {string}
   */
  constructor(id, {
    title,
    description = '',
    project = '',
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.project = project;
  }

  /**
   * Обновляет данные задачи
   * @param title {string}
   * @param description {string}
   * @param project {string}
   */
  update({
    title,
    description = '',
    project = '',
  }) {
    if ((this.title !== title) && isString(title)) this.title = title;
    if ((this.description !== description) && isString(description)) this.description = description;
    if ((this.project !== project) && isString(project)) this.project = project;
  }

  /**
   * Создает копию задачи
   * @param id
   * @returns {Task}
   */
  getCopy(id) {
    return (new Task(id, { ...this }));
  }
}

export default Task;
