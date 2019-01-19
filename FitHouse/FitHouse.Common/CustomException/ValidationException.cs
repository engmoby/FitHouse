namespace FitHouse.Common.CustomException
{
   public class ValidationException : ApplicationException
    {

        public ValidationException(ErrorCodes errorCode) : base(errorCode)
        {
        }
    }
}