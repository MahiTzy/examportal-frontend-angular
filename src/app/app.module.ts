import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { AttemptsComponent } from './pages/admin/attempts/attempts.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { QuestionsComponent } from './pages/admin/questions/questions.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { PreExamInterfaceComponent } from './pages/user/pre-exam-interface/pre-exam-interface.component';
import { QuizCategoriesComponent } from './pages/user/quiz-categories/quiz-categories.component';
import { ShowAllQuizzesComponent } from './pages/user/show-all-quizzes/show-all-quizzes.component';
import { ShowQuizzesComponent } from './pages/user/show-quizzes/show-quizzes.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import { SubmissionsComponent } from './pages/user/submissions/submissions.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserComponent } from './pages/user/user.component';
import { authInterceptorProviders } from './service/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    AdminhomeComponent,
    CategoriesComponent,
    AddCategoryComponent,
    QuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    UpdateCategoryComponent,
    QuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    QuizCategoriesComponent,
    ShowAllQuizzesComponent,
    ShowQuizzesComponent,
    PreExamInterfaceComponent,
    StartExamComponent,
    SubmissionsComponent,
    AttemptsComponent,
    UserHomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatSnackBarModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatProgressSpinnerModule, MatMenuModule, MatSidenavModule, MatListModule, FontAwesomeModule, FontAwesomeModule, MatSlideToggleModule, MatSelectModule, NgxUiLoaderModule , NgxUiLoaderHttpModule.forRoot({ showForeground: true })],
  providers: [provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch()) , provideHttpClient(withInterceptorsFromDi()), authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
