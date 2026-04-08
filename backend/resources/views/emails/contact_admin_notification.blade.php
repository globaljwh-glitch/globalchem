<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="x-apple-disable-message-reformatting" />
<title>New Contact Submission</title>
<style>
html, body {
  margin: 0 auto !important;
  padding: 0 !important;
  height: 100% !important;
  width: 100% !important;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
div[style*="margin: 16px 0"] { margin: 0 !important; }
table, td {
  mso-table-lspace: 0pt !important;
  mso-table-rspace: 0pt !important;
}
table {
  border-spacing: 0 !important;
  border-collapse: collapse !important;
  table-layout: fixed !important;
  margin: 0 auto !important;
}
img { -ms-interpolation-mode: bicubic; }
a { text-decoration: none; }
[x-apple-data-detectors], .unstyle-auto-detected-links, .aBn {
  border-bottom: 0 !important;
  cursor: default !important;
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}
.a6S { display: none !important; opacity: 0.01 !important; }
.im { color: inherit !important; }
img.g-img + div { display: none !important; }
h2 {
  font-size: 18px !important;
  font-weight: bold !important;
  margin: 0;
  padding: 0;
}
p {
  font-size: 16px !important;
  color: #414141;
  line-height: 22px !important;
  margin: 0;
  padding: 0;
  padding-bottom: 8px;
}
</style>
</head>
<body style="background-color:#f9f9f9;">
  <table cellspacing="0" align="center" cellpadding="0" border="0" style="margin: 0 auto; width:640px; background:#ffffff; border:1px solid #e2e2e2;">
    <tbody>
      <tr>
        <td style="text-align:center; background-color:#ffffff; padding:15px;">
          <a href="{{ config('app.url') }}" target="_blank">
            <img src="https://globalchemicalscorp.com/images/logo.png" alt="{{ config('app.name') }}" width="180">
          </a>
        </td>
      </tr>

      <tr>
        <td valign="middle" style="padding:20px 30px;">
          <h2 style="color:#195187; padding-bottom:10px;">New Contact Submission</h2>
          <p style="padding-bottom:18px;">Below are the details submitted through the contact form:</p>

          <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f9f9f9; border:1px solid #dcdcdc;">
            <tbody>
              @if(!empty($contact->first_name))
              <tr>
                <td style="padding:10px 15px; width:200px; font-weight:bold; border-bottom:1px solid #e2e2e2;">First Name</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->first_name }}</td>
              </tr>
              @endif

              @if(!empty($contact->last_name))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Last Name</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->last_name }}</td>
              </tr>
              @endif

              @if(!empty($contact->company))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Company</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->company }}</td>
              </tr>
              @endif

              @if(!empty($contact->address))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Address</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->address }}</td>
              </tr>
              @endif

              @if(!empty($contact->city))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">City</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->city }}</td>
              </tr>
              @endif

              @if(!empty($contact->state))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">State</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->state }}</td>
              </tr>
              @endif

              @if(!empty($contact->zipcode))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Zip Code</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->zipcode }}</td>
              </tr>
              @endif

              @if(!empty($contact->country))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Country</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->country }}</td>
              </tr>
              @endif

              @if(!empty($contact->email))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Email</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->email }}</td>
              </tr>
              @endif

              @if(!empty($contact->phone))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Phone</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->phone }}</td>
              </tr>
              @endif

              @if(!empty($contact->application))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Application Use</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->application }}</td>
              </tr>
              @endif

              @if(!empty($contact->interests))
              <tr>
                <td style="padding:10px 15px; font-weight:bold; border-bottom:1px solid #e2e2e2;">Interested Products</td>
                <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $contact->interests }}</td>
              </tr>
              @endif

              @if(!empty($contact->final_app))
              <tr>
                <td style="padding:10px 15px; font-weight:bold;">Final Application</td>
                <td style="padding:10px 15px;">{{ $contact->final_app }}</td>
              </tr>
              @endif
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td style="background-color:#195187; text-align:center; color:#fff; padding:15px;">
          <p style="color:#ffffff; font-size:14px;">&copy; {{ date('Y') }} {{ config('app.name') }}. All Rights Reserved.</p>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
