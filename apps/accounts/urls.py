from django.urls import path
from django.contrib.auth import views as auth_view
from .views import frontpage, registration_view

app_name = 'accounts'

urlpatterns = [
    path('', frontpage, name='frontpage'),
    path('signup/', registration_view, name='signup'),
    path('login/', auth_view.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('logout/', auth_view.LogoutView.as_view(), name='logout'),

    path('reset-password/', auth_view.PasswordResetView.as_view(template_name='account/password_reset_form.html'),
         name='password_reset'),
    path('reset-password-done/',
         auth_view.PasswordResetDoneView.as_view(template_name='account/password_reset_done.html'),
         name='password_reset_done'),
    path('reset-confirm/<uidb64>/<token>/',
         auth_view.PasswordResetConfirmView.as_view(template_name='account/password_reset_confirm.html'),
         name='password_reset_confirm'),
    path('reset-complete/',
         auth_view.PasswordResetCompleteView.as_view(template_name='account/change_password_done.html'),
         name='password_reset_complete'),

    path('change-password/', auth_view.PasswordChangeView.as_view(template_name='account/change_password.html'),
         name='change_password'),
    path('change-password-done/',
         auth_view.PasswordChangeDoneView.as_view(template_name='account/change_password_done.html'),
         name='password_change_done'),
]
