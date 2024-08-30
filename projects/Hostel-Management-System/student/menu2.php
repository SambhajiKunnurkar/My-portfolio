<?php
    session_start();
    include('../includes/dbconn.php');
    include('../includes/check-login.php');
    check_login();
?>

<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- By CodeAstro - codeastro.com -->
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png">
    <title>Hostel Management System</title>
    <!-- Custom CSS -->
    <link href="../assets/extra-libs/c3/c3.min.css" rel="stylesheet">
    <link href="../assets/libs/chartist/dist/chartist.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="../dist/css/style.min.css" rel="stylesheet">
    <style >
        table
      {
          border:1px solid white;
          border-radius: 10px;
          width: 280px;
          height: 150px;
      }
      /*td
      {
          border:1px solid white;
          border-radius: 10px;
      }*/
  
          #div1{
              width: 33.33%;
               
              float:right;
          }
          #div2{
              width: 33.33%;
              float: left;
               
          }
          #div3{
              width: 33.33%;
               margin: 0 auto;
          }
          #card{
              width: 180px;
          height: 45px;
          }
      </style>
</head>

<body>
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar" data-navbarbg="skin6">
            <?php include '../includes/student-navigation.php'?>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar" data-sidebarbg="skin6">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                <?php include '../includes/student-sidebar.php'?>
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-7 align-self-center">
                       <?php include '../includes/greetings.php'?>
                        <div class="d-flex align-items-center">
                            <!-- <nav aria-label="breadcrumb">
                                
                            </nav> -->
                        </div>
                    </div>
                    
                </div>
                <!-- By CodeAstro - codeastro.com -->
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            
                <!-- End First Cards -->
                <!-- *************************************************************** -->
                
               
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
             <br><br><h1><center>BreakFast and Dinner</center></h1><br><br>
            <!-- <div class="banner-bottom">
                <div class="container-fluid">
                    <div class="banner_bottom_agile_grids">
                        <div class="row wthree_banner_bottom_right_grids pr-sm-3">
                            <div class="col-lg-3 col-sm-6 banner_bottom_right_grid">
                                <div class="view view-tenth">
                                    <div class="agile_text_box">
                                        <i class="fas fa-bed" aria-hidden="true"></i>
                                        <h3> Apply for Mess</h3>
                                        <p>Only BreakFast</p>
                                        <h3>RS 1500</h3>
                                    </div>
                                    <div class="mask">
                                        <a href="application_form_mess.php?id=A"><img src="web_home/images/s1.jpg" class="img-responsive" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mt-sm-0 mt-3 banner_bottom_right_grid">
                                <div class="view view1 view-tenth">
                                    <div class="agile_text_box">
                                         <i class="fas fa-bed" aria-hidden="true"></i> -->
                                        <!-- <h3>Apply for Mess</h3>
                                        <p>BreakFast </p>
                                        <h3>RS 1500</h3> -->
                                        <!-- <img src="th.jpg" alt="">
                                        <p ><center>BreakFast</center> </p>
                                    </div>
                                    <div class="mask">
                                        <a href="application_form_mess.php?id=B"><img src="web_home/images/s2.jpg" class="img-responsive" alt="" /></a>
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-lg-3 col-sm-6 mt-lg-0 mt-3 banner_bottom_right_grid">
                                <div class="view view2 view-tenth">
                                    <div class="agile_text_box">
                                        <i class="fas fa-bed" aria-hidden="true"></i>
                                        <h3>Apply for Mess</h3>
                                        <p>BreakFast and Dinner</p>
                                        <h3>RS 2000</h3>
                                    </div>
                                    <div class="mask">
                                        <a href="application_form_mess.php?id=C"><img src="web_home/images/s3.jpg" class="img-responsive" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mt-lg-0 mt-3 banner_bottom_right_grid">
                                <div class="view view3 view-tenth">
                                    <div class="agile_text_box">
                                        <i class="fas fa-bed" aria-hidden="true"></i>
                                        <h3>Apply for Mess</h3>
                                        <p>Break Fast lunch and Dinner</p>
                                        <h3>RS 3000</h3>
                                    </div>
                                    <div class="mask">
                                        <a href="application_form_mess.php?id=D"><img src="web_home/images/s4.jpg" class="img-responsive" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"> </div>
                    </div>
                    <div class="clearfix"> </div><br><br><br><br><br><br><br> -->

                </div> 
                <div id="div1">
                    <br><br>
                      
                 </table> <p></p>
                 <table cellspacing="6"> 
                     <tr>
                         <th colspan="12" bgcolor="#46d7f4"> STARTER</th>
                     </tr>
                     <tr>
                         <td colspan="2"><b> <u>SALAD</u></b></td>
                     </tr>
                     <tr>
                         <td>MANGO</td>
                         <td align="right">60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td align="right">50 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td align="right">50 RS</td> 
                     </tr>
                 </table>
                 <P></P> 
                 <table  cellspacing="6"> 
                     <tr> 
                         <td colspan="2"><b><u>FRIES</u></b></td>
                     </tr>
                     <tr> 
                         <td>MANGO</td>
                         <td align="right">60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td align="right">50 RS</td>
             
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td align="right">50 RS</td>
             
                     </tr>
                 </table>
                 <P></P> 
                 </center> 
                 </div>
                 <!--                                                           SECOND DIVISION /////////  ,,,,,,,      --------- -->
             
                 <div id="div2">
                     <table   cellspacing="6"> 
                     <tr>
                         <th colspan="12" bgcolor="">DRINKS</th>
                     </tr>
                     <tr>
                         <td colspan="2"><b><u>JUCIES</u></b></td>
                     </tr>
                     <tr>
                         <td>MANGO</td>
                         <td>60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td>50 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td>50 RS</td> 
                     </tr>
                 </table>
                 <P></P> 
                 <table   cellspacing="6"> 
                     <tr>
                         <td colspan="2"><b><u>COFFEE</u></b></td>
                     </tr>
                     <tr> 
                         <td>MANGO</td>
                         <td>60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td> 
                         <td>50 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td> 
                         <td>50 RS</td> 
                     </tr>
                 </table>
                 <P></P> 
                 <table  cellspacing="6"> 
                     <tr>
                         <td colspan="3" ><b><u>COLD DRINKS</u></b></td>
                     </tr>
                     <tr> 
                         <td>MANGO</td> 
                         <td>60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td> 
                         <td>50 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td> 
                         <td>50 RS</td> 
                     </tr>
                 </table></center> 
                 </div>
                 <!--                                                           THIRD DIVISION /////////  ,,,,,,,      --------- --> 
                 <div id="div3"><center> 
                     <table bgcolor="#f1eff3"  id="card">
                         <tr>
                             <th bgcolor="">  <font color="#d32034"> MENU CARD</font> </th>
                         </tr></table></center><br>
                      <table  cellspacing="6"> 
                     <tr>
                         <th colspan="12" bgcolor="#46d7f4"> MAIN MENU</th>
                     </tr>
                     <tr>
                         <td colspan="2"><b><u>PIZZA</u></b></td>
                     </tr>
                     <tr>
                         <td>MANGO</td> 
                         <td>60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td> 
                         <td>50 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td> 
                         <td>50 RS</td> 
                     </tr>
                 </table>
                 <P></P> 
                 <table  cellspacing="6"> 
                     <tr>
                         <td colspan="3"><b><u>BURGER</u></b></td>
                     </tr>
                     <tr> 
                         <td>MANGO</td> 
                         <td>60 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td>50 RS</td> 
                     </tr>
                     <tr>
                         <td>ORANGE</td>
                         <td>50 RS</td> 
                     </tr>
                 </table>
                 <P></P> 
                 
             </center> 
                 </div>
            <?php include '../includes/footer.php' ?>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
    <script src="../assets/libs/popper.js/dist/umd/popper.min.js"></script>
    <script src="../assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- apps -->
    <!-- apps -->
    <!-- By CodeAstro - codeastro.com -->
    <script src="../dist/js/app-style-switcher.js"></script>
    <script src="../dist/js/feather.min.js"></script>
    <script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="../dist/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="../dist/js/custom.min.js"></script>
    <!--This page JavaScript -->
    <script src="../assets/extra-libs/c3/d3.min.js"></script>
    <script src="../assets/extra-libs/c3/c3.min.js"></script>
    <script src="../assets/libs/chartist/dist/chartist.min.js"></script>
    <script src="../assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>
    <script src="../dist/js/pages/dashboards/dashboard1.min.js"></script>
</body>

</html>