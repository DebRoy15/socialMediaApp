using Microsoft.EntityFrameworkCore;
using Domain;
 
namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Activity> Activities { get; set; }
    }
}