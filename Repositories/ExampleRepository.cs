using System.Collections.Generic;
using System.Data;
using Dapper;
using MyApp.Models;

namespace MyApp.Repositories
{
    public class ExampleRepository : IExampleRepository
    {
        private readonly IDbConnection _dbConnection;

        public ExampleRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public IEnumerable<ExampleModel> FetchData()
        {
            string sql = "SELECT Id, Name FROM ExampleTable";
            return _dbConnection.Query<ExampleModel>(sql);
        }
    }
}
