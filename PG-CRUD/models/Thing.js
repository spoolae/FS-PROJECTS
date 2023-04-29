class Thing {
  static client = null;
  static tableName = 'things';

  static attributes = {
    description: 'string'
  }

  static async create(values) {
    try {
      const insertAttrs = Object.entries(this.attributes)
        .filter(([attr, type]) => attr in values)
        .map(([attr, type]) => attr)
      const insertAttrsStr = insertAttrs.map((attr)=> `"${attr}"`).join(',');
      const insertValuesStr = insertAttrs.map((attr) => {
        const value = values[attr];
        return typeof value === 'string' ? `'${value}'` : value;
      }).join(',');

      const {rows} = await this.client.query(`
        INSERT INTO ${this.tableName} (${insertAttrsStr})
        VALUES (${insertValuesStr})
        RETURNING *
      `)
      return rows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async findAll() {
    try {
      const {rows} = await this.client.query(`
        SELECT * 
        FROM ${this.tableName}
      `);
      return rows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async findByPk(pk) {
    try {
      const {rows} = await this.client.query(`
        SELECT * 
        FROM ${this.tableName}
        WHERE "id"=${pk}
      `);
      return rows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async updateByPk(pk, values) {
    try {
      const insertAttrs = Object.entries(this.attributes)
        .filter(([attr, type]) => attr in values)
        .map(([attr, type]) => attr);

      const updateStr = insertAttrs.map((attr)=> {
        const value = values[attr];
        const valueStr = typeof value === 'string' ? `'${value}'` : value;
        return `"${attr}"=${valueStr}`
      }).join(',');

      const {rows} = await this.client.query(`
        UPDATE ${this.tableName} 
        SET ${updateStr}, "updatedAt"='${new Date().toISOString()}'
        WHERE "id"=${pk}
        RETURNING *
      `)
      return rows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async deleteByPk() {}
}

module.exports = Thing;
