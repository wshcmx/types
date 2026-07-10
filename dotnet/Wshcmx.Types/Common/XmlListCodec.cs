using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Xml;
using System.Xml.Linq;

namespace Wshcmx.Types;

internal static class XmlListCodec
{
    public static List<long> ParseLongList(string? raw, string elementName)
    {
        var result = new List<long>();
        if (string.IsNullOrWhiteSpace(raw) || string.IsNullOrWhiteSpace(elementName))
        {
            return result;
        }

        try
        {
            var root = XElement.Parse($"<root>{raw}</root>", LoadOptions.None);
            foreach (var element in root.Elements(elementName))
            {
                if (long.TryParse(element.Value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value))
                {
                    result.Add(value);
                }
            }
        }
        catch (XmlException)
        {
            return result;
        }

        return result;
    }

    public static string SerializeLongList(string elementName, IEnumerable<long>? values)
    {
        if (string.IsNullOrWhiteSpace(elementName) || values is null)
        {
            return string.Empty;
        }

        var sb = new StringBuilder();
        foreach (var value in values)
        {
            var element = new XElement(elementName, value.ToString(CultureInfo.InvariantCulture));
            sb.Append(element.ToString(SaveOptions.DisableFormatting));
        }

        return sb.ToString();
    }
}
