/**
 * 
 */
package ansys.gdata.xfer;

/**
 * @author vivek
 *
 */
import com.google.gdata.client.http.AuthSubUtil;
import com.google.gdata.client.*;
import com.google.gdata.client.contacts.*;
import com.google.gdata.data.contacts.ContactEntry;
import com.google.gdata.data.contacts.ContactFeed;
import com.google.gdata.data.contacts.ContactGroupEntry;
import com.google.gdata.data.contacts.ContactGroupFeed;
import com.google.gdata.data.extensions.ExtendedProperty;
import com.google.gdata.data.contacts.*;
import com.google.gdata.data.extensions.*;
import com.google.gdata.util.*;
import com.google.gdata.data.DateTime;
import com.google.gdata.data.PlainTextConstruct;
import com.google.gdata.data.contacts.BillingInformation;
import com.google.gdata.data.contacts.Birthday;
import com.google.gdata.data.contacts.CalendarLink;
import com.google.gdata.data.contacts.ContactEntry;
import com.google.gdata.data.contacts.ContactGroupEntry;
import com.google.gdata.data.contacts.DirectoryServer;
import com.google.gdata.data.contacts.Event;
import com.google.gdata.data.contacts.ExternalId;
import com.google.gdata.data.contacts.Gender;
import com.google.gdata.data.contacts.GroupMembershipInfo;
import com.google.gdata.data.contacts.Hobby;
import com.google.gdata.data.contacts.Initials;
import com.google.gdata.data.contacts.Jot;
import com.google.gdata.data.contacts.Language;
import com.google.gdata.data.contacts.MaidenName;
import com.google.gdata.data.contacts.Mileage;
import com.google.gdata.data.contacts.Nickname;
import com.google.gdata.data.contacts.Occupation;
import com.google.gdata.data.contacts.Priority;
import com.google.gdata.data.contacts.Relation;
import com.google.gdata.data.contacts.Sensitivity;
import com.google.gdata.data.contacts.ShortName;
import com.google.gdata.data.contacts.Subject;
import com.google.gdata.data.contacts.UserDefinedField;
import com.google.gdata.data.contacts.Website;
import com.google.gdata.data.extensions.AdditionalName;
import com.google.gdata.data.extensions.City;
import com.google.gdata.data.extensions.Country;
import com.google.gdata.data.extensions.Email;
import com.google.gdata.data.extensions.ExtendedProperty;
import com.google.gdata.data.extensions.FamilyName;
import com.google.gdata.data.extensions.FormattedAddress;
import com.google.gdata.data.extensions.FullName;
import com.google.gdata.data.extensions.GivenName;
import com.google.gdata.data.extensions.Im;
import com.google.gdata.data.extensions.Name;
import com.google.gdata.data.extensions.NamePrefix;
import com.google.gdata.data.extensions.NameSuffix;
import com.google.gdata.data.extensions.Neighborhood;
import com.google.gdata.data.extensions.OrgDepartment;
import com.google.gdata.data.extensions.OrgJobDescription;
import com.google.gdata.data.extensions.OrgName;
import com.google.gdata.data.extensions.OrgSymbol;
import com.google.gdata.data.extensions.OrgTitle;
import com.google.gdata.data.extensions.Organization;
import com.google.gdata.data.extensions.PhoneNumber;
import com.google.gdata.data.extensions.PoBox;
import com.google.gdata.data.extensions.PostCode;
import com.google.gdata.data.extensions.Region;
import com.google.gdata.data.extensions.Street;
import com.google.gdata.data.extensions.StructuredPostalAddress;
import com.google.gdata.data.extensions.When;
import com.google.gdata.data.extensions.Where;
import com.google.gdata.util.XmlBlob;
import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;
public class GDataSyncSiebelContacts
{
	 public static void main(String[] args) throws Exception
	{
		/*String authSubLogin = AuthSubUtil.getRequestUrl("ansys.com"
				                                    ,"www.ansys.com"
				                                    ,"https://www.google.com/m8/feeds/"
				                                    ,false
				                                    ,true);
		
		System.out.println("Request URl"+authSubLogin);
		URL url1 = new URL(authSubLogin);
		URLConnection uc = url1.openConnection();
		System.out.println(uc.getURL());
		
		String sessionToken = AuthSubUtil.exchangeForSessionToken(token, null);
		*/
		ContactsService linkService = new ContactsService("SiebelApp");
		linkService.setUserCredentials("vivek.srinivasan@ansys.com","Oracle!00",ClientLoginAccountType.HOSTED);
		//linkService.setAuthSubToken(sessionToken);
		   
		  ContactEntry contact = new ContactEntry();

		  Name name = new Name();
		  final String NO_YOMI = null;
		  name.setFullName(new FullName("Ludi Srinivasan", NO_YOMI));
		  name.setGivenName(new GivenName("Ludi", NO_YOMI));
		  name.setFamilyName(new FamilyName("Srinivasan", NO_YOMI));
		  contact.setName(name);
		  contact.setContent(new PlainTextConstruct("Test"));

		  Email primaryMail = new Email();
		  primaryMail.setAddress("ludi_vivek@yahoo.com");
		  primaryMail.setRel("http://schemas.google.com/g/2005#home");
		  primaryMail.setPrimary(true);
		  contact.addEmailAddress(primaryMail);


		  // Ask the service to insert the new entry
		  URL postUrl = new URL("https://www.google.com/m8/feeds/contacts/default/full");
		  ContactEntry contact1 = linkService.insert(postUrl, contact);
	}
}
