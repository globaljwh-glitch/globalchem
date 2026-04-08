<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>New Career Application</title>

    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f9f9f9;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            margin: 0 auto !important;
        }

        p {
            font-size: 16px !important;
            color: #414141;
            line-height: 22px !important;
        }

        h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            color: #195187;
        }

        .label {
            padding: 10px 15px;
            font-weight: bold;
            background: #f3f3f3;
            width: 200px;
            border-bottom: 1px solid #e2e2e2;
        }

        .value {
            padding: 10px 15px;
            border-bottom: 1px solid #e2e2e2;
        }

        .resume-box {
            background: #fafafa;
            padding: 15px;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
            margin-top: 10px;
            font-size: 15px;
            line-height: 22px;
            color: #333;
            white-space: normal;
        }
    </style>
</head>

<body>
    <table cellspacing="0" cellpadding="0" align="center" border="0"
        style="width:640px; background:#ffffff; border:1px solid #e2e2e2;">
        <tbody>

            <!-- Logo -->
            <tr>
                <td style="text-align:center; padding:15px;">
                    <a href="{{ config('app.url') }}" target="_blank">
                        <img src="https://globalchemicalscorp.com/images/logo.png" width="180" alt="Logo">
                    </a>
                </td>
            </tr>

            <!-- Content -->
            <tr>
                <td style="padding:20px 30px;">
                    <h2>New Career Application Received</h2>
                    <p>A new application has been submitted. The details are provided below:</p>

                    <table cellpadding="0" cellspacing="0" width="100%"
                        style="background-color:#ffffff; border:1px solid #dcdcdc;">
                        <tbody>

                            @if(!empty($job->name))
                                <tr>
                                    <td class="label">Applicant Name</td>
                                    <td class="value">{{ $job->name }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->email))
                                <tr>
                                    <td class="label">Email</td>
                                    <td class="value">{{ $job->email }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->phone))
                                <tr>
                                    <td class="label">Phone</td>
                                    <td class="value">{{ $job->phone }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->subject))
                                <tr>
                                    <td class="label">Subject</td>
                                    <td class="value">{{ $job->subject }}</td>
                                </tr>
                            @endif

                            @if(!empty($job->job_id))
                                <tr>
                                    <td class="label">Applied Job Title</td>
                                    <td class="value">{{ $job->career->title ?? 'N/A' }}</td>
                                </tr>
                            @endif

                            <!-- Resume -->
                            <tr>
                                <td class="label">Resume</td>
                                <td class="value">

                                    @if(!empty($job->resume_file))
                                        <strong>Attached with this email.</strong><br>
                                        <span style="font-size:14px; color:#555;">(Download and view the applicant’s
                                            resume.)</span>
                                    @endif

                                    @if(!empty($job->job_resume))
                                        <div class="resume-box">
                                            {!! nl2br(e($job->job_resume)) !!}
                                        </div>
                                    @endif

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background-color:#195187; text-align:center; color:#fff; padding:15px;">
                    <p style="color:#ffffff; font-size:14px;">
                        &copy; {{ date('Y') }} {{ config('app.name') }}. All Rights Reserved.
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
</body>

</html>