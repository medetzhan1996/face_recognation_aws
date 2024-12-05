import React from 'react';
import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness';
import { Loader, ThemeProvider } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';

export const customLivenessDisplayText: Required<LivenessDisplayText> = {
  cameraMinSpecificationsHeadingText: 'Камера не соответствует минимальным требованиям',
  cameraMinSpecificationsMessageText:
    'Камера должна поддерживать разрешение не менее 320×240 и 15 кадров в секунду.',
  cameraNotFoundHeadingText: 'Камера недоступна',
  cameraNotFoundMessageText:
    'Убедитесь, что камера подключена и не используется другим приложением. Возможно, вам нужно предоставить разрешение на использование камеры в настройках, закрыть все вкладки браузера и попробовать снова.',
  a11yVideoLabelText: 'Веб-камера для проверки подлинности лица',
  cancelLivenessCheckText: 'Отменить проверку подлинности лица',
  goodFitCaptionText: 'Хорошая посадка',
  goodFitAltText:
    'Иллюстрация лица человека, идеально вписанного в овал.',
  hintCenterFaceText: 'Выравнивайте лицо по центру',
  hintCenterFaceInstructionText:
    'Инструкция: Перед началом проверки убедитесь, что камера находится в центре верхней части экрана, и вы выровняли лицо по центру камеры. Когда начнется проверка, в центре появится овал. Вам предложат приблизить лицо к овалу, а затем удерживать неподвижность. Через несколько секунд вы услышите сообщение о завершении проверки.',
  hintFaceOffCenterText: 'Лицо находится вне овала, выравнивайте лицо по центру камеры.',
  hintMoveFaceFrontOfCameraText: 'Поместите лицо перед камерой',
  hintTooManyFacesText: 'Убедитесь, что перед камерой только одно лицо',
  hintFaceDetectedText: 'Лицо обнаружено',
  hintCanNotIdentifyText: 'Поместите лицо перед камерой',
  hintTooCloseText: 'Отодвиньтесь назад',
  hintTooFarText: 'Приблизьтесь',
  hintConnectingText: 'Подключение...',
  hintVerifyingText: 'Проверка...',
  hintCheckCompleteText: 'Проверка завершена',
  hintIlluminationTooBrightText: 'Переместитесь в менее яркое место',
  hintIlluminationTooDarkText: 'Переместитесь в более яркое место',
  hintIlluminationNormalText: 'Освещение нормальное',
  hintHoldFaceForFreshnessText: 'Сохраняйте неподвижность',
  hintMatchIndicatorText: '50% завершено. Продолжайте двигаться ближе.',
  photosensitivityWarningBodyText:
    'Эта проверка включает мигание цветов. Будьте осторожны, если у вас есть фоточувствительность.',
  photosensitivityWarningHeadingText: 'Предупреждение о фоточувствительности',
  photosensitivityWarningInfoText:
    'Некоторые люди могут испытывать эпилептические припадки при воздействии цветных огней. Будьте осторожны, если у вас или у кого-либо из вашей семьи есть эпилепсия.',
  photosensitivityWarningLabelText: 'Подробнее о фоточувствительности',
  photosensitivyWarningBodyText:
    'Эта проверка включает мигание цветов. Будьте осторожны, если у вас есть фоточувствительность.',
  photosensitivyWarningHeadingText: 'Предупреждение о фоточувствительности',
  photosensitivyWarningInfoText:
    'Некоторые люди могут испытывать эпилептические припадки при воздействии цветных огней. Будьте осторожны, если у вас или у кого-либо из вашей семьи есть эпилепсия.',
  photosensitivyWarningLabelText: 'Подробнее о фоточувствительности',
  retryCameraPermissionsText: 'Повторить попытку',
  recordingIndicatorText: 'Запись',
  startScreenBeginCheckText: 'Начать видеопроверку',
  tooFarCaptionText: 'Слишком далеко',
  tooFarAltText:
    'Иллюстрация лица человека внутри овала; есть зазор между границами лица и овала.',
  waitingCameraPermissionText: 'Ожидание разрешения на использование камеры.',
  errorLabelText: 'Ошибка',
  connectionTimeoutHeaderText: 'Время ожидания истекло',
  connectionTimeoutMessageText: 'Соединение прервано из-за превышения времени ожидания.',
  timeoutHeaderText: 'Время истекло',
  timeoutMessageText:
    'Лицо не вписалось в овал в установленное время. Попробуйте снова, полностью заполнив овал лицом.',
  faceDistanceHeaderText: 'Обнаружено движение вперед',
  faceDistanceMessageText: 'Избегайте приближения во время подключения.',
  multipleFacesHeaderText: 'Обнаружено несколько лиц',
  multipleFacesMessageText: 'Убедитесь, что перед камерой находится только одно лицо.',
  clientHeaderText: 'Клиентская ошибка',
  clientMessageText: 'Проверка завершилась ошибкой из-за проблем с клиентом.',
  serverHeaderText: 'Серверная ошибка',
  serverMessageText: 'Невозможно завершить проверку из-за ошибки сервера.',
  landscapeHeaderText: 'Альбомная ориентация не поддерживается',
  landscapeMessageText:
    'Переверните устройство в портретную (вертикальную) ориентацию.',
  portraitMessageText:
    'Убедитесь, что ваше устройство остается в портретной (вертикальной) ориентации на протяжении проверки.',
  tryAgainText: 'Попробовать снова',
};


export function LivenessQuickStartReact() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate(); // Для навигации между страницами
  const [createLivenessApiData, setCreateLivenessApiData] = React.useState(null);

  const fetchCreateLiveness = async () => {
    try {
        const response = await fetch('https://dev01.euromedix.kz/api/rekognition/session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Создана новая сессия:', data);
      setCreateLivenessApiData({ sessionId: data.session_id });
      setLoading(false);
    } catch (error) {
      console.error('Не удалось создать сессию:', error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCreateLiveness();
  }, []);

  const handleAnalysisComplete = async () => {
    try {
      // Формируем запрос с sessionId
      const response = await fetch(
        `https://dev01.euromedix.kz/api/rekognition/session/${createLivenessApiData.sessionId}/`
      );

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Результаты анализа:', data);

      if (data.result.name) {
        // Сохраняем имя в localStorage
        localStorage.setItem('detectedName', data.result.name);

        // Переходим на страницу отображения имени
        navigate('/home'); // Убедитесь, что этот путь настроен в маршрутах
      } else {
        // Переходим на страницу "Лицо не найдено"
        navigate('/face-not-found'); // Убедитесь, что этот путь настроен в маршрутах
      }
    } catch (error) {
      console.error('Ошибка при анализе:', error);
      alert('Ошибка при обработке данных. Повторите попытку.');
      handleRetry(); // Перезапуск видеопроверки
    }
  };

  
  // Функция для перезапуска видеопроверки
  const handleRetry = () => {
    setLoading(true);
    setCreateLivenessApiData(null);
    fetchCreateLiveness(); // Перезапуск сессии
  };
  
  const handleCancel = () => {
    console.log('Проверка отменена пользователем.');
    handleRetry();
  };

  return (
    <div>
      <Header />
      <ThemeProvider>
        <div className="liveness-container container">
          {loading ? (
            <Loader />
          ) : (
            <FaceLivenessDetector
              sessionId={createLivenessApiData.sessionId}
              region="ap-south-1"
              displayText={customLivenessDisplayText}
              onAnalysisComplete={handleAnalysisComplete}
              onError={(error) => console.error('Ошибка:', error)}
              onUserCancel={handleCancel}
            />
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}