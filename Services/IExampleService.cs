using System.Collections.Generic;
using MyApp.Models;

namespace MyApp.Services
{
    public interface IExampleService
    {
        IEnumerable<ExampleModel> GetData();
    }
}
