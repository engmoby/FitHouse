using System.IO;

namespace FitHouse.BLL.Services.ManageStorage
{
    public interface IManageStorage
    {
        void UploadImage(string path, MemoryStream image, string id);
    }
}
