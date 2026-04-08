<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Application Received</title>

    <style>
        html,
        body {
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

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        p {
            font-size: 16px !important;
            color: #414141;
            line-height: 22px !important;
            margin: 0;
            padding-bottom: 8px;
        }

        h2 {
            font-size: 18px !important;
            font-weight: bold !important;
            margin: 0;
        }
    </style>
</head>

<body style="background-color:#f9f9f9;">
    <table cellspacing="0" cellpadding="0" align="center" border="0"
        style="width:640px; background:#ffffff; border:1px solid #e2e2e2;">
        <tbody>

            <tr>
                <td style="text-align:center; padding:15px;">
                    <a href="{{ config('app.url') }}" target="_blank">
                        <img src="https://globalchemicalscorp.com/images/logo.png" width="180" alt="Logo">
                    </a>
                </td>
            </tr>

            <tr>
                <td style="padding:20px 30px;">
                    <h2 style="color:#195187; padding-bottom:10px;">Thank You for Applying</h2>
                    <p>Dear <strong>{{ $job->name }}</strong>,</p>
                    <p>Thank you for submitting your application. Our team will review your information and get back to
                        you shortly.</p>

                    <p style="padding-top:15px;">Here are the details you submitted:</p>

                    <table cellpadding="0" cellspacing="0" width="100%" border="0"
                        style="background-color:#f9f9f9; border:1px solid #dcdcdc;">
                        <tbody>

                            @if(!empty($job->name))
                                <tr>
                                    <td
                                        style="padding:10px 15px; font-weight:bold; width:200px; border-bottom:1px solid #e2e2e2;">
                                        Name</td>
                                    <td style="padding:10px 15px; border-bottom:1px solid #e2e2e2;">{{ $job->name }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->email))
                                <tr>
                                    <td style="padding:10px 15px; font-weight:bold;">Email</td>
                                    <td style="padding:10px 15px;">{{ $job->email }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->phone))
                                <tr>
                                    <td style="padding:10px 15px; border-top:1px solid #e2e2e2; font-weight:bold;">Phone
                                    </td>
                                    <td style="padding:10px 15px; border-top:1px solid #e2e2e2;">{{ $job->phone }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->subject))
                                <tr>
                                    <td style="padding:10px 15px; font-weight:bold;">Subject</td>
                                    <td style="padding:10px 15px;">{{ $job->subject }}</td>
                                </tr>
                            @endif

                        </tbody>
                    </table>
                </td>
            </tr>

            <tr>
                <td style="background-color:#195187; text-align:center; color:#fff; padding:15px;">
                    <p style="color:#ffffff; font-size:14px;">&copy; {{ date('Y') }} {{ config('app.name') }}. All
                        Rights Reserved.</p>
                </td>
            </tr>

        </tbody>
    </table>
</body>

</html>