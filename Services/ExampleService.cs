using System.Collections.Generic;
using MyApp.Models;
using MyApp.Repositories;

namespace MyApp.Services
{
    public class ExampleService : IExampleService
    {
        private readonly IExampleRepository _exampleRepository;

        public ExampleService(IExampleRepository exampleRepository)
        {
            _exampleRepository = exampleRepository;
        }

        public IEnumerable<ExampleModel> GetData()
        {
            return _exampleRepository.FetchData();
        }
    }
}
