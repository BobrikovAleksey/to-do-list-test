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

  getCopy(id) {
    return (new Task(id, { ...this }));
  }
}

export default Task;
